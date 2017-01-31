
enum entryType {
    eSTR,
    eCAS,
    eNET
};

class TableEntry {
    type: entryType;
    mountPtName: string;
    sourceId: string;
    format: string;
    formatDetail: string;
    carrierInfo: number;
    navSystem: string;
    network: string;
    country: string;
    latitude: number;
    longitude: number;
    sendNmea: boolean;
    vrs: boolean;
    generator: string;
    encryption: string;
    authentication: string;
    free: boolean;
    bitRate: number
}

export class SourceTable {
    private sourceList: TableEntry[];
    private data: string;
    //private socket
}