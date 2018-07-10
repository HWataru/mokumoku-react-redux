import * as React from "react";
import Item from "../../models/Item";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

interface IAddItemProps {
  addItem?: (item: Item) => any;
}

interface IItemFormSate {
  item: Item;
}

export class ItemForm extends React.Component<IAddItemProps, IItemFormSate> {
  private id = 0;
  constructor(props: IAddItemProps) {
    super(props);
    this.state = { item: new Item("", 0, 0) };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  public handleChange(event: any) {
    const item = this.state.item;
    let newItem: Item;
    switch (event.target.name) {
      case "name":
        newItem = new Item(event.target.value, item.count, item.id);
        break;
      case "count":
        newItem = new Item(item.name, event.target.value, item.id);
        break;
      default:
        newItem = item;
        break;
    }
    this.setState({ item: newItem });
  }
  public handleSubmit(event: any) {
    if (this.props.addItem) {
      const oldItem = this.state.item;
      const newItem = new Item(oldItem.name, oldItem.count, this.id++);
      this.props.addItem(newItem);
    }
  }
  public render() {
    return (
      <div onChange={this.handleChange}>
        <Input type="text" name="name" />
        {/* <input type="number" name="count"/> */}
        <Button onClick={this.handleSubmit} value="add">
          Add
        </Button>
      </div>
    );
  }
}
