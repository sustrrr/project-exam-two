
//search
import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { BASE_URL } from "../../constants/api"

import { IoMdSearch } from "react-icons/io";


//IoMdSearch

export default class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }


  async getOptions(){
    const res = await axios.get(BASE_URL + "wc/store/products?per_page=27")
    const data = res.data

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions)
    return (
      <div className="search">
        <div className="search__input">
        <Select placeholder="Search for accommodation ..." components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="search__icon">
        <Link to={`./detail/${this.state.id}`}><IoMdSearch/></Link>
        </div>
      </div>
    )
  }
}