import { SearchOutlined } from "@mui/icons-material";
import { InputBase, Stack } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const path = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      if (path === "/") {
        params.delete('query');
      }
    }

    // Prevent redirect to homepage when clearing search on other page
    if (!term && path !== "/") return;

    replace(`/?${params.toString()}`);
  }, 300);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: "1px solid white",
        borderRadius: "4px",
        py: "2px",
        px: "4px",
      }}
    >
      <InputBase
        sx={{
          color: "white",
          "input[type='search']::-webkit-search-cancel-button": {
            filter: "invert(100%) brightness(200%) contrast(200%)",
          },
        }}
        startAdornment={<SearchOutlined />}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
        type="search"
      />
    </Stack>
  );
}