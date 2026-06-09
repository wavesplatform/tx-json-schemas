import type {
    AliasTransaction,
    BurnTransaction,
    CancelLeaseTransaction,
    CommitToGenerationTransaction,
    DataTransaction,
    ExchangeTransaction,
    ExchangeTransactionOrder,
    InvokeScriptCall,
    InvokeScriptPayment,
    IssueTransaction,
    InvokeScriptTransaction,
    LeaseTransaction,
    MassTransferTransaction,
    ReissueTransaction,
    SetAssetScriptTransaction,
    SetScriptTransaction,
    SponsorshipTransaction,
    TransferTransaction,
    UpdateAssetInfoTransaction,
} from '@waves/ts-types';

// Backward-compatible aliases for schema generation.
export type IAliasTransaction<LONG = string | number> = AliasTransaction<LONG>;
export type IIssueTransaction<LONG = string | number> = IssueTransaction<LONG>;
export type ITransferTransaction<LONG = string | number> = TransferTransaction<LONG>;
export type IReissueTransaction<LONG = string | number> = ReissueTransaction<LONG>;
export type IBurnTransaction<LONG = string | number> = BurnTransaction<LONG>;
export type IExchangeTransaction<LONG = string | number> = ExchangeTransaction<LONG>;
export type ILeaseTransaction<LONG = string | number> = LeaseTransaction<LONG>;
export type ICancelLeaseTransaction<LONG = string | number> = CancelLeaseTransaction<LONG>;
export type IMassTransferTransaction<LONG = string | number> = MassTransferTransaction<LONG>;
export type IDataTransaction<LONG = string | number> = DataTransaction<LONG>;
export type ISetScriptTransaction<LONG = string | number> = SetScriptTransaction<LONG>;
export type ISetAssetScriptTransaction<LONG = string | number> = SetAssetScriptTransaction<LONG>;
export type ISponsorshipTransaction<LONG = string | number> = SponsorshipTransaction<LONG>;
export type IInvokeScriptTransaction<LONG = string | number> = InvokeScriptTransaction<LONG>;
export type IUpdateAssetInfoTransaction<LONG = string | number> = UpdateAssetInfoTransaction<LONG>;
export type IOrder<LONG = string | number> = ExchangeTransactionOrder<LONG>;
export type IInvokeScriptPayment<LONG = string | number> = InvokeScriptPayment<LONG>;
export type IInvokeScriptCall<LONG = string | number> = InvokeScriptCall<LONG>;
export type ICommitToGenerationTransaction<LONG = string | number> = CommitToGenerationTransaction<LONG>;
