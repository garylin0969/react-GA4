import { FC, useEffect } from 'react';

interface GTMAnalyticsProp {
    GTMId: string;
}

type WindowWithDataLayer = Window & {
    dataLayer: Record<string, string | undefined>[];
};

declare const window: WindowWithDataLayer;

export enum GTMEventKey {
    ACTION = 'data-ga-action',
    TARGET = 'data-ga-target',
    CATEGORY = 'data-ga-category',
    LABEL = 'data-ga-label',
    EVENT_NAME = 'data-ga-event-name',
    SECTION = 'data-ga-section',
    CLICK_ITEM = 'data-ga-click-item',
    SEARCH_TERM = 'data-ga-search-term',
}

export enum CustomEventName {
    CLICK = 'Click',
    CLICK_NAV = 'Click_Nav',
    CLICK_TAB = 'Click_Tab',
    CLICK_TAG = 'Click_Tag',
    CLICK_BUTTON = 'Click_Button',
    CLICK_TOPIC = 'Click_Topic',
    CLICK_QUOTE = 'Click_Quote',
    CLICK_NEWS = 'Click_News',
    CLICK_FOREX = 'Click_Forex',
    CLICK_FILTER = 'Click_Filter',
    CLICK_AD = 'Click_Ad',
    SEARCH = 'Search',
    IMP_PLACEMENT = 'imp_placement',
}

/* section 區塊除特殊情況無法用網頁實體路徑分類，例如：彈出視窗、導覽列，其餘皆使用佔位符由 GTM 來管理分類 */
export enum GTMConstants {
    SECTION_PLACEHOLDER = '%p',
}

/* GTM EventName 為必填，其餘為選填，串接請參考：https://docs.google.com/spreadsheets/d/1JVg-wI09so8Sb7eH4z-miHW6BLSM43kAuXQnOqzZ2eg/edit#gid=439574919 */
export type GaActionType = Partial<Record<GTMEventKey, string | undefined>> & {
    [GTMEventKey.EVENT_NAME]: CustomEventName | undefined;
};

export const GTMAnalytics: FC<GTMAnalyticsProp> = ({ GTMId }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${GTMId}`;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, [GTMId]);

    return null;
};

// GTM 在無對應事件時，需要以「undefined」為空值重置事件內容，不然 GA4 會追蹤到舊的變數
export const sendGTM = (props: GaActionType) => {
    if (window && typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
            event: 'push_event',
            [GTMEventKey.ACTION]: undefined,
            [GTMEventKey.CATEGORY]: undefined,
            [GTMEventKey.CLICK_ITEM]: undefined,
            [GTMEventKey.LABEL]: undefined,
            [GTMEventKey.SEARCH_TERM]: undefined,
            [GTMEventKey.TARGET]: undefined,
            ...props,
        });
    }
};
