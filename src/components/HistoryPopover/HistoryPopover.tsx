import React from "react";
import { Popover, List, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { SearchListItem } from "../SearchBar/styles";

interface HistoryPopoverProps {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  searchHistory: string[];
  onItemClick: (item: string) => void;
  onClearHistory: () => void;
  popoverWidth: number | null;
}

const HistoryPopover: React.FC<HistoryPopoverProps> = ({
  id,
  open,
  anchorEl,
  onClose,
  searchHistory,
  onItemClick,
  onClearHistory,
  popoverWidth,
}) => (
  <Popover
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    slotProps={{
      paper: {
        style: {
          width: popoverWidth ? `${popoverWidth}px` : "auto",
        },
      },
    }}>
    {/* List the items in the search history */}
    <List>
      {searchHistory.map((item, index) => (
        <SearchListItem key={index} onClick={() => onItemClick(item)}>
          {item}
        </SearchListItem>
      ))}
    </List>
    <IconButton onClick={onClearHistory}>
      <Typography variant="body2">Clear History</Typography>
      <ClearIcon />
    </IconButton>
  </Popover>
);

export default HistoryPopover;
