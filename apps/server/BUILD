load("//tools/typescript:index.bzl", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")

ts_project(
    name = "lib",
    srcs = glob(["*.ts"]),
    deps = [
        "//apps/server/services",
        "//libs/c_lib",
        "@npm//@types/cors",
        "@npm//@types/express",
        "@npm//cors",
        "@npm//express",
    ],
)

nodejs_binary(
    name = "server",
    data = [":lib"],
    entry_point = ":index.ts",
)
