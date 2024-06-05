import { PaginationProps } from "@/types/definitions";
import {
  InputBase,
  Pagination as MUIPagination,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const StyledPagination = styled(MUIPagination)({
  '& .MuiPaginationItem-root': {
    color: 'white',
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    backgroundColor: '#B81D24',
  },
  '& .MuiPaginationItem-page.Mui-selected:hover': {
    backgroundColor: '#B81D24',
  },
});

const StyledInput = styled(InputBase)({
  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "input[type=number]": {
    MozAppearance: "textfield",
  },
});

export default function Pagination({ totalPage, currentPage }: PaginationProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', value.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  const handleGoToPage = useDebouncedCallback((page) => {
    if (page) {
      // Ensure the page number is within the range
      let pageNumber = Math.abs(page);
      if (pageNumber > totalPage) {
        pageNumber = totalPage;
      }

      const params = new URLSearchParams(searchParams);
      params.set('page', String(pageNumber));

      replace(`/?${params.toString()}`);
    }

  }, 500);

  return (
    <Stack
      display={totalPage > 1 ? "flex" : "none"}
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={4}
      marginBottom={16}
    >
      <StyledPagination
        count={totalPage}
        size={isSmallScreen ? 'small' : 'large'}
        onChange={handleChange}
        page={currentPage}
      />
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography color="white" fontSize={{ xs: "small", sm: "medium" }}>Go to</Typography>
        <StyledInput
          sx={{
            border: "1px solid white",
            color: "white",
            borderRadius: "4px",
            width: "56px",
            paddingX: "8px",
            fontSize: { xs: "small", sm: "medium" },
          }}
          onChange={(e) => {
            handleGoToPage(e.target.value);
          }}
          type="number"
        />
      </Stack>
    </Stack>
  );
}
