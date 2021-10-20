import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import classes from "./Search.module.scss";
function Search() {
    const renderTitle = (title) => (
        <span>
    {title}
            <a
                style={{
                    float: 'right',
                }}
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >
      more
    </a>
  </span>
    );

    const renderItem = (title, count) => ({
        value: title,
        label: (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {title}
                <span>
        <UserOutlined /> {count}
      </span>
            </div>
        ),
    });

    const options = [
        {
            label: renderTitle('Libraries'),
            options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
        },
        {
            label: renderTitle('Solutions'),
            options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
        },
        {
            label: renderTitle('Articles'),
            options: [renderItem('AntDesign design language', 100000)],
        },
    ];
    return (
        <div className={classes.root}>
            <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                options={options}
            >
                <Input.Search size="large" placeholder="input here" />
            </AutoComplete>
        </div>
    )
}
export default Search