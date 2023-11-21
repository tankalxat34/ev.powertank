class Base64Converter {
    static toBase64(data: string): string {
        const base64 = btoa(data);
        return base64;
    }

    static fromBase64(base64: string): string {
        const data = atob(base64);
        return data;
    }
}

export default Base64Converter;