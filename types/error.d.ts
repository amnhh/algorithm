type ArgumentsCheckError = Error

interface ArgumentsErrorConstructor extends ErrorConstructor {
    new(message?: string): ArgumentsCheckError;
    (message?: string): ArgumentsCheckError;
    readonly prototype: ArgumentsCheckError;
}

declare const ArgumentsError: ArgumentsErrorConstructor;
