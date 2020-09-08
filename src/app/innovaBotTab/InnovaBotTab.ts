import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/innovaBotTab/index.html")
@PreventIframe("/innovaBotTab/config.html")
@PreventIframe("/innovaBotTab/remove.html")
export class InnovaBotTab {
}
