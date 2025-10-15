function Card(elem) {
    return <div className="card">
        <div className="top">
            <img src={elem.brandLogo} alt={elem.alter} />
            <button>Save <i className="ri-bookmark-line"></i></button>
        </div>
        <div className="center">
            <h3>{elem.name} <span>{elem.datePosted}</span></h3>
            <h2>{elem.post}</h2>
            <button>{elem.tag1}</button>
            <button>{elem.tag2}</button>
        </div>
        <div className="bottom">
            <div>
                <h3>{elem.pay}</h3>
                <p>{elem.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
}

export default Card;