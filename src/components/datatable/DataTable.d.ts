import * as React from 'react';

interface DataTableProps {
    id?: string;
    value?: any[];
    header?: any;
    footer?: any;
    style?: object;
    className?: string;
    tableStyle?: object;
    tableClassName?: string;
    paginator?: boolean;
    paginatorPosition?: string;
    alwaysShowPaginator?: boolean;
    paginatorTemplate?: string;
    paginatorLeft?: any;
    paginatorRight?: any;
    pageLinkSize?: number;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    first?: number;
    rows?: number;
    totalRecords?: number;
    lazy?: boolean;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: any[];
    sortMode?: string;
    defaultSortOrder?: number;
    emptyMessage?: string;
    selectionMode?: string;
    selection?: any;
    contextMenuSelection?: any;
    compareSelectionBy?: string;
    dataKey?: string;
    metaKeySelection?: boolean;
    headerColumnGroup?: any;
    footerColumnGroup?: any;
    frozenHeaderColumnGroup?: any;
    frozenFooterColumnGroup?: any;
    expandedRows?: any[];
    responsive?: boolean;
    resizableColumns?: boolean;
    columnResizeMode?: string;
    reorderableColumns?: boolean;
    filters?: object;
    globalFilter?: any;
    scrollable?: boolean;
    scrollHeight?: string;
    virtualScroll?: boolean;
    virtualScrollDelay?: number;
    virtualRowHeight?: number;
    frozenWidth?: string;
    frozenValue?: any[];
    csvSeparator?: string;
    exportFilename?: string;
    rowGroupMode?: string;
    autoLayout?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    tabIndex?: string;
    stateKey?: string;
    stateStorage?: string;
    groupField?: string;
    saveState?: {
        paginator?: boolean;
        sortField?: boolean;
        filters?: boolean;
        columnWidths?: boolean;
        columnOrder?: boolean;
        expandedRows?: boolean;
        selection?: boolean;
    };

    onSelectionChange?(e: { originalEvent: Event, value: any }): void;

    onContextMenuSelectionChange?(e: { originalEvent: Event, value: any }): void;

    rowExpansionTemplate?(data: any): JSX.Element | undefined;

    onRowToggle?(e: { data: any[] }): void;

    rowClassName?(rowData: any): object;

    rowGroupHeaderTemplate?(data: any, index: number): React.ReactNode | undefined;

    rowGroupFooterTemplate?(data: any, index: number): React.ReactNode | undefined;

    onColumnResizeEnd?(e: { element: HTMLElement, delta: number }): void;

    onSort?(e: { sortField: string, sortOrder: number, multiSortMeta: any }): void;

    onPage?(e: { first: number, rows: number }): void;

    onFilter?(filters: any[]): void;

    onVirtualScroll?(e: { first: number, rows: number }): void;

    onRowClick?(e: { originalEvent: Event, data: any, index: number }): void;

    onRowDoubleClick?(e: { originalEvent: Event, data: any, index: number }): void;

    onRowSelect?(e: { originalEvent: Event, data: any, type: string }): void;

    onRowUnselect?(e: { originalEvent: Event, data: any, type: string }): void;

    onRowExpand?(e: { originalEvent: Event, data: any }): void;

    onRowCollapse?(e: { originalEvent: Event, data: any }): void;

    onContextMenu?(e: { originalEvent: Event, data: any }): void;

    onColReorder?(e: { dragIndex: number, dropIndex: number, columns: any }): void;

    onRowReorder?(e: { originalEvent: Event, value: any, dragIndex: number, dropIndex: number }): void;

    onValueChange?(value: any[]): void;
}

export class DataTable extends React.Component<DataTableProps, any> {
    public exportCSV(): void;

    public filter<T>(value: T, field: string, mode: string): void;
}
