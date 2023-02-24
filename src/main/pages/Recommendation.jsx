import './Recommendation.css'

export const Recommendation = () => {
  return (
    <main className='main-recommendations'>
        <div className="main-rec-container">
            <div className='main-info-container'>
                <div className='main-info'>
                    <h2 className="artist-name">Frank Ocean</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque quidem obcaecati officia sunt optio beatae, eaque error adipisci consectetur aspernatur quia ea perferendis, dolore tempore esse magnam eius dolores.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolorum soluta explicabo blanditiis fuga sunt quod, tenetur aperiam laudantium veritatis ut autem impedit rem? Magnam eaque dignissimos voluptatem eos porro.
                    Ipsa nemo et, perferendis earum deserunt excepturi ex totam id distinctio vel, illo dicta dolor iusto sit quisquam accusantium nihil nostrum harum veniam obcaecati fugiat asperiores dolorum commodi consequatur! Corrupti.</p>
                    <a href="#" className='button'>Visitar</a>
                </div>
                <img src="https://i.scdn.co/image/ab6761610000e5ebfbc3faec4a370d8393bee7f1" alt="" className='test1' />
            </div>
            <div className='rec-container'>
                <ul className='ul-rec'>
                    <li>
                        <a href="#" className='rec'><img src="" alt="" className='test2'/></a>
                        <h3>xxxxxxxxxxxxxxx</h3>
                    </li>
                    <li>
                        <a href="#" className='rec'><img src="" alt="" className='test2'/></a>
                        <h3>xxxxxxxxxxxxxxx</h3>
                    </li>
                    <li>
                        <a href="#" className='rec'><img src="" alt="" className='test2'/></a>
                        <h3>xxxxxxxxxxxxxxx</h3>
                    </li>
                    <li>
                        <a href="#" className='rec'><img src="" alt="" className='test2'/></a>
                        <h3>xxxxxxxxxxxxxxx</h3>
                    </li>
                </ul>
            </div>
        </div>
    </main>
  )
}
