import '../css/Features.css'
import { Box, Check, Support, Trophy } from '../icons/Icons'

export const Features = () => {
    return (
        <section id="features">
            <ul>
                <li>
                    <Trophy />
                    <div>
                        <em>High Quality</em>
                        <span>crafted from top materials</span>
                    </div>
                </li>
                <li>
                    <Check />
                    <div>
                        <em>Warranty Protection</em>
                        <span>Over 2 years</span>
                    </div>
                </li>
                <li>
                    <Box />
                    <div>
                        <em>Free Shipping</em>
                        <span>Order over $150</span>
                    </div>
                </li>
                <li>
                    <Support />
                    <div>
                        <em>24 / 7 Support</em>
                        <span>Dedicated support</span>
                    </div>
                </li>
            </ul>
        </section>
    )
}