import classes from './page.module.css';
import { Suspense } from 'react';
import { getTechnologies } from '@/lib/technology';
import TechnologyTable from '@/components/technology-table/technology-table';
import TechnologyForm from '@/components/technology-form/technology-form';
async function Technology(){
    const techs = await getTechnologies();
    console.log(techs);
    return <TechnologyTable techs={techs}/>
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
            <TechnologyForm/>
            <Suspense fallback={<p className={classes.loading}>Fetching Technologies...</p>}>
                <Technology/>
            </Suspense>
        </main>   
        </>
        )
}