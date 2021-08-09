// ** React Imports
import { useState, createContext } from 'react'

// ** Intl Provider Import
import { IntlProvider } from 'react-intl'

// ** Core Language Data
import messagesEn from '@assets/data/locales/en.json'
import messagesDe from '@assets/data/locales/de.json'
import messagesFr from '@assets/data/locales/fr.json'
import messagesPt from '@assets/data/locales/pt.json'
import messagesZh from '@assets/data/locales/cn.json'

// ** User Language Data
import userMessagesEn from '@src/assets/data/locales/en.json'
import userMessagesDe from '@src/assets/data/locales/de.json'
import userMessagesFr from '@src/assets/data/locales/fr.json'
import userMessagesPt from '@src/assets/data/locales/pt.json'
import userMessagesZh from '@src/assets/data/locales/cn.json'

// ** Menu msg obj
const menuMessages = {
  en: { ...messagesEn, ...userMessagesEn },
  de: { ...messagesDe, ...userMessagesDe },
  fr: { ...messagesFr, ...userMessagesFr },
  pt: { ...messagesPt, ...userMessagesPt },
  cn: { ...messagesZh, ...userMessagesZh }
}

// ** Create Context
const Context = createContext()

const IntlProviderWrapper = ({ children }) => {
  // ** States
  const [locale, setLocale] = useState('cn')
  const [messages, setMessages] = useState(menuMessages['cn'])

  // ** Switches Language
  const switchLanguage = lang => {
    setLocale(lang)
    setMessages(menuMessages[lang])
  }

  return (
    <Context.Provider value={{ locale, switchLanguage }}>
      <IntlProvider key={locale} locale={locale} messages={messages} defaultLocale='cn'>
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export { IntlProviderWrapper, Context as IntlContext }
