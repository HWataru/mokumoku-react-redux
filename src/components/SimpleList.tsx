import * as React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import Item from '../data/Item'

interface IState {
    nothing?: string;
}

interface ISimpleListProps {
    list: Item[]
    name: string
}



class SimpleList extends React.Component<ISimpleListProps,IState> {
    public constructor(props: ISimpleListProps){
        super(props);
    }
    public render(){
        return (
        <div>
            <List component="nav">
            { this.props.list.map((item,index) => {
                return (
                    <ListItem button={true} key={index}>
                        <ListItemText primary={item.name}/>
                    </ListItem>
                )
            })
            }
            </List>
          </div>      
        )
    }
}

export { SimpleList, ISimpleListProps }