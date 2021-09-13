const {resolve} = require('path');
const {writeFile} = require('fs-extra');
const TJS = require('typescript-json-schema');

const TYPES = [
    'TTx',
    'AliasTransaction',
    'IssueTransaction',
    'TransferTransaction',
    'ReissueTransaction',
    'BurnTransaction',
    'ExchangeTransaction',
    'LeaseTransaction',
    'CancelLeaseTransaction',
    'MassTransferTransaction',
    'SetScriptTransaction',
    'SetAssetScriptTransaction',
    'DataTransaction',
    'SponsorshipTransaction',
    'InvokeScriptTransaction',
    'UpdateAssetInfoTransaction',
    'ExchangeTransactionOrder',
    'IOrderParams',
    'ICancelOrder',
    'ICancelOrderParams',
    'IAliasParams',
    'IIssueParams',
    'ITransferParams',
    'IReissueParams',
    'IBurnParams',
    'ILeaseParams',
    'ICancelLeaseParams',
    'IMassTransferParams',
    'ISetScriptParams',
    'ISetAssetScriptParams',
    'IDataParams',
    'ISponsorshipParams',
    'IInvokeScriptParams',
    'IUpdateAssetInfoParams',
    'INodeRequestOptions',
    'InvokeScriptCallArgument',
    'TSeedTypes',
    'WithId',
    'WithTxType'
];

function buildSchemas() {
    // optionally pass argument to schema generator
    const settings = {
        required: true,
        include: ['transactions.ts'],
        excludePrivate: true,
        noExtraProps: false,
    };

    // optionally pass ts compiler options
    const compilerOptions = {
        strictNullChecks: true,
        resolveJsonModule: true,
        allowSyntheticDefaultImports: true,
        downlevelIteration: true,
        lib: ["dom", "es2016", "es2017"]
    };

    const program = TJS.getProgramFromFiles([resolve('./node_modules/@waves/waves-transactions/dist/index.d.ts')], compilerOptions);

    TYPES.forEach(type => {
        const id = `https://raw.githubusercontent.com/wavesplatform/tx-json-schemas/master/src/schemas/${type}.json`;
        let schema = TJS.generateSchema(program, type, {...settings, id});
        // Define generic LONG as number in JSON schema.
        // Otherwise ot would be object. Should probably pass param that defines LONG schema;
        schema.definitions = {...schema.definitions, LONG: {type: ['number']}};
        const filePath = `src/schemas/${type}.json`;
        const fileContent = JSON.stringify(schema, null, 2);
        writeFile(filePath, fileContent, (err) => {
            if (err) throw err;
            console.log(`${type} schema has been written`)
        })
    });

    const manifest = `${TYPES.map(type => `import ${type} from './${type}.json'`).join('\n')}
export default {
  ${TYPES.join(',\n  ')}
}`;
    writeFile('src/schemas/index.ts', manifest, err1 => {
        if (err1) throw err1;
        console.log('Manifest has been written')
    })
}

buildSchemas()
