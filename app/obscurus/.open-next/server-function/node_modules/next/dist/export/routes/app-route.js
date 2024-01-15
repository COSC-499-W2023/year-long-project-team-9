"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "exportAppRoute", {
    enumerable: true,
    get: function() {
        return exportAppRoute;
    }
});
const _promises = /*#__PURE__*/ _interop_require_default(require("fs/promises"));
const _path = require("path");
const _constants = require("../../lib/constants");
const _node = require("../../server/base-http/node");
const _routemoduleloader = require("../../server/future/helpers/module-loader/route-module-loader");
const _nextrequest = require("../../server/web/spec-extension/adapters/next-request");
const _utils = require("../../server/web/utils");
const _isdynamicusageerror = require("../helpers/is-dynamic-usage-error");
const _constants1 = require("../../shared/lib/constants");
const _ciinfo = require("../../telemetry/ci-info");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function exportAppRoute(req, res, params, page, incrementalCache, distDir, htmlFilepath) {
    // Ensure that the URL is absolute.
    req.url = `http://localhost:3000${req.url}`;
    // Adapt the request and response to the Next.js request and response.
    const request = _nextrequest.NextRequestAdapter.fromNodeNextRequest(new _node.NodeNextRequest(req), (0, _nextrequest.signalFromNodeResponse)(res));
    // Create the context for the handler. This contains the params from
    // the route and the context for the request.
    const context = {
        params,
        prerenderManifest: {
            version: 4,
            routes: {},
            dynamicRoutes: {},
            preview: {
                previewModeEncryptionKey: "",
                previewModeId: "",
                previewModeSigningKey: ""
            },
            notFoundRoutes: []
        },
        staticGenerationContext: {
            originalPathname: page,
            nextExport: true,
            supportsDynamicHTML: false,
            incrementalCache
        }
    };
    if (_ciinfo.hasNextSupport) {
        context.staticGenerationContext.isRevalidate = true;
    }
    // This is a route handler, which means it has it's handler in the
    // bundled file already, we should just use that.
    const filename = (0, _path.join)(distDir, _constants1.SERVER_DIRECTORY, "app", page);
    try {
        var _context_staticGenerationContext_store;
        // Route module loading and handling.
        const module = await _routemoduleloader.RouteModuleLoader.load(filename);
        const response = await module.handle(request, context);
        const isValidStatus = response.status < 400 || response.status === 404;
        if (!isValidStatus) {
            return {
                fromBuildExportRevalidate: 0
            };
        }
        const blob = await response.blob();
        const revalidate = ((_context_staticGenerationContext_store = context.staticGenerationContext.store) == null ? void 0 : _context_staticGenerationContext_store.revalidate) || false;
        const headers = (0, _utils.toNodeOutgoingHttpHeaders)(response.headers);
        const cacheTags = context.staticGenerationContext.fetchTags;
        if (cacheTags) {
            headers[_constants.NEXT_CACHE_TAGS_HEADER] = cacheTags;
        }
        if (!headers["content-type"] && blob.type) {
            headers["content-type"] = blob.type;
        }
        // Writing response body to a file.
        const body = Buffer.from(await blob.arrayBuffer());
        await _promises.default.writeFile(htmlFilepath.replace(/\.html$/, ".body"), body, "utf8");
        // Write the request metadata to a file.
        const meta = {
            status: response.status,
            headers
        };
        await _promises.default.writeFile(htmlFilepath.replace(/\.html$/, ".meta"), JSON.stringify(meta));
        return {
            fromBuildExportRevalidate: revalidate,
            fromBuildExportMeta: meta
        };
    } catch (err) {
        if (!(0, _isdynamicusageerror.isDynamicUsageError)(err)) {
            throw err;
        }
        return {
            fromBuildExportRevalidate: 0
        };
    }
}

//# sourceMappingURL=app-route.js.map