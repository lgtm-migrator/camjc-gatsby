import React from 'react'
import Link from 'gatsby-link'
import _ from 'lodash'

const IndexPage = ({pathContext: data}) =>{
  return <div>
    <h1>Résumé</h1>
    <h2>{_.get(data, 'info.label')}</h2>
    <p>{_.get(data, 'info.brief')}</p>

    <section>
      <h2>Employment</h2>
      {_(data)
        .chain()
        .get('employment.history')
        .groupBy('employer')
        .map((employerData, employer) => {
          return <div key={employer}>
            <h3>{employer}</h3>
            {_.map(employerData, (role) =>
              <div key={role.position}>
                <h4>{role.position}</h4>
                <ul>
                  {_.map(role.highlights, (highlight) => <li key={highlight}>
                    {highlight}
                  </li>)}
                </ul>
              </div>
            )}
          </div>
        })
        .value()}
    </section>
  </div>
};

export default IndexPage
