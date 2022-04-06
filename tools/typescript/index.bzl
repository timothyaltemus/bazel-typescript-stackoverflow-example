"""TypeScript helpers for convienience."""

load("@npm//@bazel/typescript:index.bzl", ts_proj = "ts_project")

def ts_project(
        name,
        srcs = ["index.ts"],
        deps = [],
        tsconfig = "//:tsconfig",
        visibility = ["//visibility:private"],
        **kwargs):
    """An abstraction of the @bazel/typescript ts_project build rule.

    This rule makes it convenient for us by using default values that are commonly used throughout
    the project.

    Args:
        name (str): The name to use for the `ts_project` build.
        srcs (list of str): The list of typescript source files to compile.
        deps (list of str): The list of dependencies to use in the `ts_project`.
        tsconfig (str): The build rule or path for the `tsconfig` file to use to compile the `ts_project`. The default value is the base tsconfig (//:tsconfig).
        visibility (list of str): The list of valid targets with access to this build rule.
        **kwargs: The additional arguments to pass to the `ts_project` build rule.
    """

    ts_proj(
        name = name,
        srcs = srcs,
        deps = deps,
        source_map = True,
        visibility = visibility,
        tsconfig = tsconfig,
        composite = True,
        declaration = True,
        **kwargs
    )
