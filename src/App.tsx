import React from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import { items,sponsors } from './assets/items'
import LargeCard from './components/LargeCard'

import './css/skeleton.css'
import './css/normalize.css'

function App(): JSX.Element {
    return ( 
        <div className = "App" >
            <Header></Header>
            <div className = "container row">
                <LargeCard
                    i={0}
                    link={sponsors[0].link}
                    cover={sponsors[0].image}>
                </LargeCard>
                <LargeCard
                    i={1}
                    link={sponsors[1].link}
                    cover={sponsors[1].image}>
                </LargeCard>
                {
                    items.map((item, i: number) => {
                        return(
                            <Card
                                i={i}
                                title={item.title}
                                subtitle={item.subtitle}
                                link={item.link}
                                cover={item.image}>
                            </Card>
                        )
                    })
                }
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;