import React from 'react'
import IndexLayaut from '../../layaut/IndexLayaut'
import DataWithFilter from '../../../components/LinkPagesWFilter'
const genres = () => {
  return (
    <IndexLayaut>
        <DataWithFilter url={"/discover/tv"} type={"tv"} path={"/with_genres/tv/genres"} title={"Genres"} />
    </IndexLayaut>
  )
}

export default genres