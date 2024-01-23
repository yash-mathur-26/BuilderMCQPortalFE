import classes from './page.module.css';
import { Suspense } from 'react';

async function Technology(){
    const techs = await getTechnologies();
    return <TechnologiesGrid techs={techs}/>
}
export default function Technologies(){
    return(
        <>
        <header>
            <h1>
                Technologies.
            </h1>
            <p>Choose your Technology to add question in.</p>
        </header>
        <main>
            <Suspense fallback={<p className={classes.loading}>Fetching Technologies...</p>}>
                <Technology/>
            </Suspense>
        </main>   
        </>
        )
}