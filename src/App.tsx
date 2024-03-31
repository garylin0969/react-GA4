import { sendGTM, GTMEventKey, CustomEventName } from './utils/gtm';

function App() {
    return (
        <>
            <h1
                onClick={() => {
                    sendGTM({
                        [GTMEventKey.EVENT_NAME]: CustomEventName.CLICK,
                        [GTMEventKey.CLICK_ITEM]: 'GA4',
                    });
                }}
            >
                GA4
            </h1>
        </>
    );
}

export default App;
