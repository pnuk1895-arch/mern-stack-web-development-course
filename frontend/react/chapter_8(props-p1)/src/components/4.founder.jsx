import "./4.Founder.css"

function Founder({founderData}){
    return(
        <section className="founder-section">

          <h1>Founders</h1>

          <div className="card-container">

            {
              founderData.map((founder) => (

                <div className="card" key={founder.id}>

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                    alt="founder"
                  />

                  <h2>{founder.name}</h2>

                  <p>{founder.role}</p>

                </div>

              ))
            }

          </div>

        </section>
    )
}

export default Founder