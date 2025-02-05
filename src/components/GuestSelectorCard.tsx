import { AddRounded, RemoveRounded } from "@mui/icons-material";
import {
  Box,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { PropsWithChildren, useState } from "react";

interface GuestSelectRowProps {
  value: string | number;
  onAdd?(): void;
  onRemove?(): void;
}

function GuestSelectRow({
  value,
  onAdd,
  onRemove,
  children,
}: PropsWithChildren<GuestSelectRowProps>) {
  return (
    <Stack direction="row" className="items-center">
      <Typography className="flex-grow px-2">{children}</Typography>
      <IconButton onClick={onRemove} aria-label="remove">
        <RemoveRounded />
      </IconButton>
      <Typography>{value}</Typography>
      <IconButton onClick={onAdd} aria-label="add">
        <AddRounded />
      </IconButton>
    </Stack>
  );
}

interface GuestSelectorCardProps {
  onSetAdults?(value: number): void;
  onSetChild?(value: number): void;
  onSetRooms?(value: number): void;
  max?: {
    adults: number;
    child: number;
    rooms: number;
  };
}

export default function GuestSelectorCard({
  onSetAdults,
  onSetChild,
  onSetRooms,
  max,
}: GuestSelectorCardProps) {
  const [numAdults, _setNumAdults] = useState(0);
  const [numChild, _setNumChild] = useState(0);
  const [numRooms, _setNumRooms] = useState(0);
  const setNumAdults = (value: number) => {
    _setNumAdults(value);
    onSetAdults && onSetAdults(value);
  };
  const setNumChild = (value: number) => {
    _setNumChild(value);
    onSetChild && onSetChild(value);
  };
  const setNumRooms = (value: number) => {
    _setNumRooms(value);
    onSetRooms && onSetRooms(value);
  };

  return (
    <Card className="px-6 py-4">
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        className="gap-1"
      >
        <GuestSelectRow
          value={numAdults}
          onAdd={() =>
            numAdults < (max?.adults ?? 10) && setNumAdults(numAdults + 1)
          }
          onRemove={() => numAdults > 0 && setNumAdults(numAdults - 1)}
        >
          Adults
        </GuestSelectRow>
        <GuestSelectRow
          value={numChild}
          onAdd={() =>
            numChild < (max?.child ?? 10) && setNumChild(numChild + 1)
          }
          onRemove={() => numChild > 0 && setNumChild(numChild - 1)}
        >
          Children
        </GuestSelectRow>
        <GuestSelectRow
          value={numRooms}
          onAdd={() =>
            numRooms < (max?.rooms ?? 5) && setNumRooms(numRooms + 1)
          }
          onRemove={() => numRooms > 0 && setNumRooms(numRooms - 1)}
        >
          Rooms
        </GuestSelectRow>
      </Stack>
    </Card>
  );
}
