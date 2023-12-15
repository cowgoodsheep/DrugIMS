import React from 'react'
import { Table, Tooltip } from 'antd';
export default function MyTable({ loading, columns, data }) {
    return (
        <div>
            <Table size='middle' scroll={{
                y: 450,
            }} loading={loading} columns={columns.map((v, i) => {
                if (!v.filters && !v.render) {
                    v.ellipsis = {
                        showTitle: false,
                    }
                    v.render = (v) => (
                        <Tooltip placement="topLeft" title={v}>
                            {v}
                        </Tooltip>
                    )
                }
                return v
            })} dataSource={data} />
        </div>
    )
}
