function jsonToObject<T>(jsonString: string): T {
    return JSON.parse(jsonString) as T;
}