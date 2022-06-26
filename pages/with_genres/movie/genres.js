import React from 'react'
import IndexLayaut from '../../layaut/IndexLayaut'
import DataWithFilter from '../../../components/LinkPagesWFilter'
const genres = () => {
  return (
    <IndexLayaut>
        <DataWithFilter url={"/discover/movie"} path={"/with_genres/movie/genres"} title={"Genres"} type={"movie"} />
    </IndexLayaut>
  )
}

export default genres