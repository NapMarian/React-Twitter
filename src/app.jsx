import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    return(
        <section className='App'>
        <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
        <TwitterFollowCard userName="NapMarian" name="Mariano Knaap" />
        </section>
    )
}