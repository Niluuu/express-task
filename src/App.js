import React, { Component } from 'react'
import NoResult from './features/components/NoResult'
import { DatePicker } from 'antd'
import { Table } from 'antd'
import {connect} from "react-redux"
import { getApi, getParam } from "./features/redux/action" 
import { Button} from 'antd';
const { RangePicker } = DatePicker;

export class App extends Component {  
  render() {
    const { data ,loading, param } = this.props
    
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'DateInsert',
        dataIndex: 'dateInsert',
        key: 'dateInsert',
      },
      {
        title: 'DeliveryPrice',
        dataIndex: 'deliveryPrice',
        key: 'deliveryPrice',
      },
      {
        title: 'Filial',
        dataIndex: 'storeName',
        key: 'storeName',
      },
      {
        title: 'TotalPrice',
        dataIndex: 'mealsTotalPrice',
        key: 'mealsTotalPrice',
      }
    ]

    return (
      <div style={{margin: 30}}> 
        <div style={{marginBottom: 50}}>
          <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            placeholder={['Start Time', 'End Time']}
            onChange={(value,dataString) => this.props.dispatch(getParam(dataString))}
          />
          <Button type="primary" 
            style={{marginLeft: 10}}
            onClick={() => this.props.dispatch(getApi(param))}
          >
          Cформировать отчот
          </Button>
        </div>
        {
          (loading) ?
          <Table 
            size="small"
            dataSource={data}
            columns={columns}
            pagination={2}
          /> 
          : 
          <NoResult/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
   data: state.data,
   loading: state.loading,
   param: state.param
})

export default connect(mapStateToProps)(App)

