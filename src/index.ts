import Ajv = require('ajv')
import { mapObj } from "@waves/waves-transactions/dist/generic";
import { TRANSACTION_TYPE } from '@waves/ts-types';
import schemas from './schemas';

const ajv = Ajv({
    allErrors: true,
});

export const validators = mapObj(schemas, (schema: any) => ajv.compile(schema));

export const schemaTypeMap: { [i: number]: { schema: any, paramsSchema: any, validator: Ajv.ValidateFunction, paramsValidator: Ajv.ValidateFunction } } = {
    [TRANSACTION_TYPE.ISSUE]: {
        schema: schemas.IssueTransaction,
        paramsSchema: schemas.IIssueParams,
        validator: validators.IssueTransaction,
        paramsValidator: validators.IIssueParams,
    },
    [TRANSACTION_TYPE.TRANSFER]: {
        schema: schemas.TransferTransaction,
        paramsSchema: schemas.ITransferParams,
        validator: validators.TransferTransaction,
        paramsValidator: validators.ITransferParams,
    },
    [TRANSACTION_TYPE.REISSUE]: {
        schema: schemas.ReissueTransaction,
        paramsSchema: schemas.IReissueParams,
        validator: validators.ReissueTransaction,
        paramsValidator: validators.IReissueParams,
    },
    [TRANSACTION_TYPE.BURN]: {
        schema: schemas.BurnTransaction,
        paramsSchema: schemas.IBurnParams,
        validator: validators.BurnTransaction,
        paramsValidator: validators.IBurnParams,
    },
    [TRANSACTION_TYPE.EXCHANGE]: {
        schema: schemas.ExchangeTransaction,
        paramsSchema: schemas.ExchangeTransaction,
        validator: validators.ExchangeTransaction,
        paramsValidator: validators.ExchangeTransaction,
    },
    [TRANSACTION_TYPE.LEASE]: {
        schema: schemas.LeaseTransaction,
        paramsSchema: schemas.ILeaseParams,
        validator: validators.LeaseTransaction,
        paramsValidator: validators.ILeaseParams,
    },
    [TRANSACTION_TYPE.CANCEL_LEASE]: {
        schema: schemas.CancelLeaseTransaction,
        paramsSchema: schemas.ICancelLeaseParams,
        validator: validators.CancelLeaseTransaction,
        paramsValidator: validators.ICancelLeaseParams,
    },
    [TRANSACTION_TYPE.ALIAS]: {
        schema: schemas.AliasTransaction,
        paramsSchema: schemas.IAliasParams,
        validator: validators.AliasTransaction,
        paramsValidator: validators.IAliasParams,
    },

    [TRANSACTION_TYPE.MASS_TRANSFER]: {
        schema: schemas.MassTransferTransaction,
        paramsSchema: schemas.IMassTransferParams,
        validator: validators.MassTransferTransaction,
        paramsValidator: validators.IMassTransferParams,
    },
    [TRANSACTION_TYPE.DATA]: {
        schema: schemas.DataTransaction,
        paramsSchema: schemas.IDataParams,
        validator: validators.DataTransaction,
        paramsValidator: validators.IDataParams,
    },
    [TRANSACTION_TYPE.SET_SCRIPT]: {
        schema: schemas.SetScriptTransaction,
        paramsSchema: schemas.ISetScriptParams,
        validator: validators.SetScriptTransaction,
        paramsValidator: validators.ISetScriptParams,
    },
    [TRANSACTION_TYPE.SPONSORSHIP]: {
        schema: schemas.SponsorshipTransaction,
        paramsSchema: schemas.ISponsorshipParams,
        validator: validators.SponsorshipTransaction,
        paramsValidator: validators.ISponsorshipParams,
    },
    [TRANSACTION_TYPE.SET_ASSET_SCRIPT]: {
        schema: schemas.SetAssetScriptTransaction,
        paramsSchema: schemas.ISetAssetScriptParams,
        validator: validators.SetAssetScriptTransaction,
        paramsValidator: validators.ISetAssetScriptParams,
    },
    [TRANSACTION_TYPE.INVOKE_SCRIPT]: {
        schema: schemas.InvokeScriptTransaction,
        paramsSchema: schemas.IInvokeScriptParams,
        validator: validators.InvokeScriptTransaction,
        paramsValidator: validators.IInvokeScriptParams,
    },
    [TRANSACTION_TYPE.UPDATE_ASSET_INFO]: {
        schema: schemas.UpdateAssetInfoTransaction,
        paramsSchema: schemas.IUpdateAssetInfoParams,
        validator: validators.UpdateAssetInfoTransaction,
        paramsValidator: validators.IUpdateAssetInfoParams,
    },
    [TRANSACTION_TYPE.INVOKE_EXPRESSION]: {
        schema: schemas.InvokeExpressionTransaction,
        paramsSchema: schemas.IInvokeExpressionParams,
        validator: validators.InvokeExpressionTransaction,
        paramsValidator: validators.IInvokeExpressionParams,
    }
};

export {
    schemas
};
