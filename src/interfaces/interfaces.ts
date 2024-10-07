export interface Fondo {
    id: number;
    identificadorFondo: string;
    tipoRescate: string;
    codigoInterfaz: string;
}

export interface FileContent {
    name: string;
    content: string;
}

export interface FondoDetails {
    identificadorFondo: string;
    tipoRescate: string;
    codigoInterfaz: string;
}

export interface FondoDetailsProps {
    fondoDetails: FondoDetails;
    loading: boolean;
}

export interface UseInfiniteScrollProps {
    containerRef: React.RefObject<HTMLElement>;
    loadMore: () => void;
    hasMore: boolean;
    loading: boolean;
    offset?: number;
}

export interface FondoSelectorProps {
    fondos: Fondo[];
    onSelect: (codFondo: number) => void;
    selectedFondo?: number;
    loadMoreFondos: () => void;
    hasMoreFondos: boolean;
    loadingFondos: boolean;
}

export interface FileSelectorProps {
    files: Array<{ nombre: string }>;
    onSelect: (fileName: string) => void;
    loading: boolean;
    selectedFile?: string;
}
