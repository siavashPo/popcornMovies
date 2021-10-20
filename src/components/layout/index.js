import NextNprogress from 'nextjs-progressbar';
import Header from "./header/Header";
import classes from "./index.module.scss";
import Search from "./header/search/Search";
import Footer from "./footer/Footer";
function LayoutSite({children}) {
    return (
        <>
            <NextNprogress
                color="green"
                startPosition={0.7}
                stopDelayMs={200}
                height={10}
                showOnShallow={true}
            />
            <div style={{backgroundColor:'#333338'}}>
                <Header />
                <div className={classes.root}>
                    <h1 style={{color:'#fdff7f', marginLeft:'25px'}}>
                        Welcome.
                    </h1>
                    <h3 style={{color:'#facea0', marginLeft:'45px'}}>
                        Millions of movies, TV shows and people to discover. Explore now.
                    </h3>
                    <Search />
                </div>
                {children}
                <Footer />
            </div>
        </>
    )
}
export default LayoutSite