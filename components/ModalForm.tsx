"use client";
import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button, Group, Radio } from "@mantine/core";
import { useListState, randomId } from "@mantine/hooks";
import { Checkbox } from "@mantine/core";
import { DatePickerInput, DateTimePicker } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { useState } from "react";

const initialValues = [
  {
    label: "[General Contract Conditions](link to PDF document)",
    checked: false,
    key: randomId(),
  },
  { label: "Privacy Policy", checked: false, key: randomId() },
  {
    label: " I have read and accept the terms and conditions.",
    checked: false,
    key: randomId(),
  },
];

export default function ModalForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { fname: "", lname: "", email: "", age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      fname: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      lname: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  const [values, handlers] = useListState(initialValues);
  const [value, setValue] = useState<Date | null>(null);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xxs"
      size="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) =>
        handlers.setItemProp(index, "checked", event.currentTarget.checked)
      }
    />
  ));

  const currentDate = new Date();
  const minBirthDate = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <p className=" tracking-wide"></p>
      <div className="flex justify-between w-full items-center space-x-2">
        <div className="w-full">
          <TextInput
            mt="sm"
            label="Destination of The Trip"
            withAsterisk
            placeholder="Name"
            key={form.key("fname")}
            {...form.getInputProps("fname")}
          />

          <DatePickerInput
            mt="sm"
            withAsterisk
            minDate={new Date()}
            label="Travel Dates"
            placeholder="Pick date"
            value={value}
            onChange={setValue}
          />

          <TextInput
            mt="sm"
            withAsterisk
            label="First Name"
            placeholder="Name"
            key={form.key("fname")}
            {...form.getInputProps("fname")}
          />
        </div>
        <div className="w-full">
          <TextInput
            withAsterisk
            mt="sm"
            label="ID or NIE number"
            placeholder="Email"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />

          <TextInput
            withAsterisk
            mt="sm"
            label="Phone Number"
            placeholder="+251 9000000"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <TextInput
            withAsterisk
            mt="sm"
            label="Contact Email"
            placeholder="Email"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
        </div>
      </div>

      <DatePickerInput
    mt='sm'
        withAsterisk
        maxDate={minBirthDate}
        label="Date of birth"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
      <div>
        <Radio.Group
          name="travelwith"
          label="Are you traveling with someone?"
          // description="This is anonymous"
          withAsterisk
        >
          <Group mt="sm">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
        <Radio.Group
          name="before"
          label="Have you traveled with us before?"
          // description="This is anonymous"
          withAsterisk
        >
          <Group mt="sm">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
        <Radio.Group
          name="health"
          label="Do you have any health problems or medical conditions that may affect the trip? The answer to this question will be considered and will be recorded as a sworn statement."
          // description="This is anonymous"
          withAsterisk
        >
          <Group mt="sm">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
        <Radio.Group
          name="philos"
          label="If you haven't already, please read our philosophy and way of traveling carefully. Do you agree with it and consider yourself in line with it?"
          // description="This is anonymous"
          withAsterisk
        >
          <Group mt="sm">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
        <Checkbox
          mt="md"
          size="xs"
          checked={allChecked}
          indeterminate={indeterminate}
          label="Agree all "
          onChange={() =>
            handlers.setState((current) =>
              current.map((value) => ({ ...value, checked: !allChecked }))
            )
          }
        />
        {items}
      </div>

      <Button type="submit" mt="sm" className="tracking-wide">
        Reserve
      </Button>
    </form>
  );
}
