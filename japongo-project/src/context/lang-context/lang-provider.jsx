import { useState } from "react";
import {LangContext} from './lang-context.js';

function LangProvider({value, children}){
    const [lang, updateLang] = useState(value);
    return(
        <LangContext.Provider value={[lang, updateLang]}>
            {children}
        </LangContext.Provider>
    )
}

export default LangProvider;