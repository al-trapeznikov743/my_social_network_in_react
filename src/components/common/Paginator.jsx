import React from 'react'

const Paginator = (props) => {
    const pageCount = Math.ceil(props.totalCount/props.pageSize)

    const pages = []

    for(let i = 0; i < pageCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(page => {
            return <span
                className={`${props.currentPage === page ? 'selectedPage' : null} paginator`}
                onClick={() => {
                    props.onPageChanged(page)
                }}
            >{page}</span>
        })}
    </div>
}

export default Paginator