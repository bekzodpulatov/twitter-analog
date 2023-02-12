import './AppHeader.css'

const AppHeader = ({liked, allPosts}) => {
    return(
        <div className="app-header d-flex">
            <h1>
                Bekzod Pulatov
            </h1>
            <h4>
                {allPosts} post, like {liked}
            </h4>
        </div>
    )
}

export default AppHeader