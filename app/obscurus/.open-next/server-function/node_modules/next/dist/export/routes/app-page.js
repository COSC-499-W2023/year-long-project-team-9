"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    generatePrefetchRsc: null,
    exportAppPage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    generatePrefetchRsc: function() {
        return generatePrefetchRsc;
    },
    exportAppPage: function() {
        return exportAppPage;
    }
});
const _promises = /*#__PURE__*/ _interop_require_default(require("fs/promises"));
const _approuterheaders = require("../../client/components/app-router-headers");
const _isdynamicusageerror = require("../helpers/is-dynamic-usage-error");
const _constants = require("../../lib/constants");
const _ciinfo = require("../../telemetry/ci-info");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Lazily loads and runs the app page render function.
 */ const render = (...args)=>{
    return require("../../server/future/route-modules/app-page/module.compiled").renderToHTMLOrFlight(...args);
};
async function generatePrefetchRsc(req, path, res, pathname, htmlFilepath, renderOpts) {
    req.headers[_approuterheaders.RSC.toLowerCase()] = "1";
    req.headers[_approuterheaders.NEXT_URL.toLowerCase()] = path;
    req.headers[_approuterheaders.NEXT_ROUTER_PREFETCH.toLowerCase()] = "1";
    renderOpts.supportsDynamicHTML = true;
    renderOpts.isPrefetch = true;
    delete renderOpts.isRevalidate;
    const prefetchRenderResult = await render(req, res, pathname, {}, renderOpts);
    prefetchRenderResult.pipe(res);
    await res.hasStreamed;
    const prefetchRscData = Buffer.concat(res.buffers);
    if (renderOpts.store.staticPrefetchBailout) return;
    await _promises.default.writeFile(htmlFilepath.replace(/\.html$/, ".prefetch.rsc"), prefetchRscData);
}
async function exportAppPage(req, res, page, path, pathname, query, renderOpts, htmlFilepath, debugOutput, isDynamicError, isAppPrefetch) {
    // If the page is `/_not-found`, then we should update the page to be `/404`.
    if (page === "/_not-found") {
        pathname = "/404";
    }
    try {
        if (isAppPrefetch) {
            await generatePrefetchRsc(req, path, res, pathname, htmlFilepath, renderOpts);
            return {
                fromBuildExportRevalidate: 0
            };
        }
        const result = await render(req, res, pathname, query, renderOpts);
        const html = result.toUnchunkedString();
        const { metadata } = result;
        const flightData = metadata.pageData;
        const revalidate = metadata.revalidate;
        if (revalidate === 0) {
            if (isDynamicError) {
                throw new Error(`Page with dynamic = "error" encountered dynamic data method on ${path}.`);
            }
            if (!renderOpts.store.staticPrefetchBailout) {
                await generatePrefetchRsc(req, path, res, pathname, htmlFilepath, renderOpts);
            }
            const { staticBailoutInfo = {} } = metadata;
            if (revalidate === 0 && debugOutput && (staticBailoutInfo == null ? void 0 : staticBailoutInfo.description)) {
                const err = new Error(`Static generation failed due to dynamic usage on ${path}, reason: ${staticBailoutInfo.description}`);
                // Update the stack if it was provided via the bailout info.
                const { stack } = staticBailoutInfo;
                if (stack) {
                    err.stack = err.message + stack.substring(stack.indexOf("\n"));
                }
                console.warn(err);
            }
            return {
                fromBuildExportRevalidate: 0
            };
        }
        let headers;
        if (metadata.fetchTags) {
            headers = {
                [_constants.NEXT_CACHE_TAGS_HEADER]: metadata.fetchTags
            };
        }
        // Writing static HTML to a file.
        await _promises.default.writeFile(htmlFilepath, html ?? "", "utf8");
        // Writing the request metadata to a file.
        const meta = {
            headers
        };
        await _promises.default.writeFile(htmlFilepath.replace(/\.html$/, ".meta"), JSON.stringify(meta));
        // Writing the RSC payload to a file.
        await _promises.default.writeFile(htmlFilepath.replace(/\.html$/, ".rsc"), flightData);
        return {
            fromBuildExportRevalidate: revalidate,
            // Only include the metadata if the environment has next support.
            fromBuildExportMeta: _ciinfo.hasNextSupport ? meta : undefined
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

//# sourceMappingURL=app-page.js.map