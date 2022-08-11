
import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

export default function BookTable() {

  let [posts, setPosts] = useState([])

  const columns = [
    {
      dataField: 'id',
      text: 'Id'
    },
    {
      dataField: 'title',
      text: 'Título'
    },
    {
      dataField: 'body',
      text: 'texto'
    }
  ]

  /* const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price'
  }]; */


  const products = [{
    id:1,
    name: 'livro1',
    price: 1000 
  }, {
    id: 2,
    name: 'livro2',
    price: 3000 
  }, {
    id: 3,
    name: 'livro3',
    price: 5000 
  }]


  const getPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
      .then(data => {
      setPosts(data)
      })
  }

  useEffect(() => {
    getPosts()
  },[])

  
  return (
    <div>
      <BootstrapTable keyField='id' data={posts} columns={columns} />
    </div>
  )
}



