/** Rerpresents a context. */
export interface Context {

    /** Identifies this context among all its siblings - contexts having the same parent. - */
    key: string;

    /** The parent context of this context, if any. */
    parent?: Context;
} 