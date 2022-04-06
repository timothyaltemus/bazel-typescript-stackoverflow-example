load("//tools/typescript:index.bzl", "ts_project")

ts_project(
    name = "c_lib",
    srcs = glob(["*.ts"]),
    visibility = ["//visibility:public"],
    deps = ["//libs/b_lib"],
)
