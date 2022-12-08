export type localeId = string;

export interface Context {
    readonly user: string;

    /**
     * Returns the string identified by the specified ID in the context's current locale.
     * @param id An ID that uniquely identifies a localizeable string within this context.
     */
    getLocaleString(id: localeId): string;
}