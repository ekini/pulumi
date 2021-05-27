import * as utilities from "./utilities";
import * as pulumi from "@pulumi/pulumi";
/**
 * Check codegen of functions with default values.
 */
export function funcWithDefaultValue(args: FuncWithDefaultValueArgs, opts?: pulumi.InvokeOptions): Promise<FuncWithDefaultValueResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("madeup-package:codegentest:funcWithDefaultValue", {
        "a": args.a,
        "b": args.b,
    }, opts);
}

export interface FuncWithDefaultValueArgs {
    a: string;
    b?: string;
}

export interface FuncWithDefaultValueResult {
    readonly r: string;
}

export function funcWithDefaultValueOutput(args: FuncWithDefaultValueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<FuncWithDefaultValueResult> {
    return pulumi.output(args).apply(a => funcWithDefaultValue(a, opts))
}

export interface FuncWithDefaultValueOutputArgs {
    a: pulumi.Input<string>;
    b?: pulumi.Input<string>;
}