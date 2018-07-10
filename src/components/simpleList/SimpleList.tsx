import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Item from "../../models/Item";
import { ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface IState {
  nothing?: string;
}

interface ISimpleListProps {
  items: Item[];
  name: string;
  addItem?: any;
  delItem?: any;
}

class SimpleList extends React.Component<ISimpleListProps, IState> {
  public constructor(props: ISimpleListProps) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  public handleDelete(event: any) {
    if (this.props.delItem) {
      this.props.delItem(event);
    }
  }
  public render() {
    return (
      <div>
        <List component="nav">
          {this.props.items.map((item, index) => {
            return (
              <ListItem button={true} key={index}>
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={this.handleDelete.bind(this, item.id)}
                    aria-label="Delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export { SimpleList, ISimpleListProps };
