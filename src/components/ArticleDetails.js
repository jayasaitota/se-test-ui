
const ArticleDetails = (props)=>{
  return props.articles.map((article)=>{
    const {title,urlToImage,url,description,publishedAt} = article;
    return (
      <div key={title} className='item'>
        <div className='ui small image'>
          <img src={urlToImage} alt='article' />
        </div>
        <div className="content">
          <div className="header"><a href={url} target='_blank' rel='noreferrer'>{title}</a></div>
          <div className="meta">
            <span>Pulished On: {publishedAt.split('T')[0]}</span>
          </div>
          <div className="description">
            <p>
              {description}
            </p>
          </div>
        </div>
        <hr />
      </div>
    );
  })
}

export default ArticleDetails