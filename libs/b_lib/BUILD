load("//tools/typescript:index.bzl", "ts_project")

ts_project(
    name = "b_lib",
    srcs = glob(["*.ts"]),
    visibility = ["//visibility:public"],
    deps = ["//libs/a_lib"],
)
