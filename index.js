import GlobalStyleComponent from '../styles/global' // GLOBAL CSS
import { ThemeProvider } from 'styled-components' // THEME PROVIDER
import theme from '../../../styles/theme' // THEME IMPORT

import {
    Section
} from './styles' // IMPORT FROM STYLES.JS

const RelatedSolutions = () => {

return (
        <Section active={true}>
                <p style={{color:theme.BovDairy.italo}}>Related Solutions</p>
        </Section>
)
