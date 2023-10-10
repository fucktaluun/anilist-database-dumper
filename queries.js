export const mediaQuery = `query($fucktaluun0: Int, $fucktaluun1: Int, $fucktaluun2: Int, $fucktaluun3: Int, $fucktaluun4: Int, $fucktaluun5: Int, $fucktaluun6: Int, $fucktaluun7: Int) {
  fucktaluun0: Page(page: $fucktaluun0) {
    ...med
  }
  fucktaluun1: Page(page: $fucktaluun1) {
    ...med
  }
  fucktaluun2: Page(page: $fucktaluun2) {
    ...med
  }
  fucktaluun3: Page(page: $fucktaluun3) {
    ...med
  }
  fucktaluun4: Page(page: $fucktaluun4) {
    ...med
  }
  fucktaluun5: Page(page: $fucktaluun5) {
    ...med
  }
  fucktaluun6: Page(page: $fucktaluun6) {
    ...med
  }
  fucktaluun7: Page(page: $fucktaluun7) {
    ...med
  }
}

fragment med on Page {
  media {
    id,
    idMal,
    title {
      english,
      native,
      romaji
    },
    type,
    format,
    status(version: 3),
    description,
    startDate {
      year
      month
      day
    },
    endDate {
      year
      month
      day
    },
    season,
    seasonYear,
    episodes,
    duration,
    chapters,
    volumes,
    countryOfOrigin,
    isLicensed,
    source(version: 3),
    hashtag,
    trailer {
      id,
      site
    },
    coverImage {
      extraLarge
      color
    },
    bannerImage,
    genres,
    synonyms,
    favourites,
    tags {
      id
    },
    relations {
      edges {
        id
      }
    },
    characters {
      edges {
        id
      }
    },
    staff {
      edges {
        id
      }
    },
    studios {
      edges {
        id
      }
    },
    isAdult,
    airingSchedule {
      edges {
        id
      }
    },
    externalLinks {
      url
    }
  }
}`

export const characterQuery = `query($fucktaluun0: Int, $fucktaluun1: Int, $fucktaluun2: Int, $fucktaluun3: Int, $fucktaluun4: Int, $fucktaluun5: Int, $fucktaluun6: Int, $fucktaluun7: Int, $fucktaluun8: Int, $fucktaluun9: Int, $fucktaluun10: Int, $fucktaluun11: Int, $fucktaluun12: Int, $fucktaluun13: Int, $fucktaluun14: Int, $fucktaluun15: Int, $fucktaluun16: Int, $fucktaluun17: Int, $fucktaluun18: Int, $fucktaluun19: Int, $fucktaluun20: Int, $fucktaluun21: Int, $fucktaluun22: Int) {
  fucktaluun0: Page(page: $fucktaluun0) {
    ...med
  }
  fucktaluun1: Page(page: $fucktaluun1) {
    ...med
  }
  fucktaluun2: Page(page: $fucktaluun2) {
    ...med
  }
  fucktaluun3: Page(page: $fucktaluun3) {
    ...med
  }
  fucktaluun4: Page(page: $fucktaluun4) {
    ...med
  }
  fucktaluun5: Page(page: $fucktaluun5) {
    ...med
  }
  fucktaluun6: Page(page: $fucktaluun6) {
    ...med
  }
  fucktaluun7: Page(page: $fucktaluun7) {
    ...med
  }
  fucktaluun8: Page(page: $fucktaluun8) {
    ...med
  }
  fucktaluun9: Page(page: $fucktaluun9) {
    ...med
  }
  fucktaluun10: Page(page: $fucktaluun10) {
    ...med
  }
  fucktaluun11: Page(page: $fucktaluun11) {
    ...med
  }
  fucktaluun12: Page(page: $fucktaluun12) {
    ...med
  }
  fucktaluun13: Page(page: $fucktaluun13) {
    ...med
  }
  fucktaluun14: Page(page: $fucktaluun14) {
    ...med
  }
  fucktaluun15: Page(page: $fucktaluun15) {
    ...med
  }
  fucktaluun16: Page(page: $fucktaluun16) {
    ...med
  }
  fucktaluun17: Page(page: $fucktaluun17) {
    ...med
  }
  fucktaluun18: Page(page: $fucktaluun18) {
    ...med
  }
  fucktaluun19: Page(page: $fucktaluun19) {
    ...med
  }
  fucktaluun20: Page(page: $fucktaluun20) {
    ...med
  }
  fucktaluun21: Page(page: $fucktaluun21) {
    ...med
  }
  fucktaluun22: Page(page: $fucktaluun22) {
    ...med
  }
}

fragment med on Page {
  characters {
    id,
    name {
      first,
      middle,
      last,
      full,
      native,
      alternative,
      alternativeSpoiler,
    },
    image {
      large
    },
    description,
    gender,
    dateOfBirth {
      year
      month
      day
    },
    age,
    bloodType
  }
}`

export const staffQuery = `query($fucktaluun0: Int, $fucktaluun1: Int, $fucktaluun2: Int, $fucktaluun3: Int, $fucktaluun4: Int, $fucktaluun5: Int, $fucktaluun6: Int, $fucktaluun7: Int, $fucktaluun8: Int, $fucktaluun9: Int, $fucktaluun10: Int, $fucktaluun11: Int, $fucktaluun12: Int, $fucktaluun13: Int, $fucktaluun14: Int, $fucktaluun15: Int, $fucktaluun16: Int, $fucktaluun17: Int) {
  fucktaluun0: Page(page: $fucktaluun0) {
    ...med
  }
  fucktaluun1: Page(page: $fucktaluun1) {
    ...med
  }
  fucktaluun2: Page(page: $fucktaluun2) {
    ...med
  }
  fucktaluun3: Page(page: $fucktaluun3) {
    ...med
  }
  fucktaluun4: Page(page: $fucktaluun4) {
    ...med
  }
  fucktaluun5: Page(page: $fucktaluun5) {
    ...med
  }
  fucktaluun6: Page(page: $fucktaluun6) {
    ...med
  }
  fucktaluun7: Page(page: $fucktaluun7) {
    ...med
  }
  fucktaluun8: Page(page: $fucktaluun8) {
    ...med
  }
  fucktaluun9: Page(page: $fucktaluun9) {
    ...med
  }
  fucktaluun10: Page(page: $fucktaluun10) {
    ...med
  }
  fucktaluun11: Page(page: $fucktaluun11) {
    ...med
  }
  fucktaluun12: Page(page: $fucktaluun12) {
    ...med
  }
  fucktaluun13: Page(page: $fucktaluun13) {
    ...med
  }
  fucktaluun14: Page(page: $fucktaluun14) {
    ...med
  }
  fucktaluun15: Page(page: $fucktaluun15) {
    ...med
  }
  fucktaluun16: Page(page: $fucktaluun16) {
    ...med
  }
  fucktaluun17: Page(page: $fucktaluun17) {
    ...med
  }
}

fragment med on Page {
  staff {
    id,
    name {
      first
      middle
      last
      full
      native
      userPreferred
    },
    languageV2,
    image { 
      large
    },
    description,
    primaryOccupations,
    gender,
    dateOfBirth {
      year
      month
      day
    },
    dateOfDeath {
      year
      month
      day
    },
    yearsActive,
    homeTown,
    bloodType
  }
}`

export const studiosQuery = `query($fucktaluun0: Int, $fucktaluun1: Int, $fucktaluun2: Int, $fucktaluun3: Int, $fucktaluun4: Int, $fucktaluun5: Int, $fucktaluun6: Int, $fucktaluun7: Int, $fucktaluun8: Int, $fucktaluun9: Int, $fucktaluun10: Int, $fucktaluun11: Int, $fucktaluun12: Int, $fucktaluun13: Int, $fucktaluun14: Int, $fucktaluun15: Int, $fucktaluun16: Int, $fucktaluun17: Int, $fucktaluun18: Int, $fucktaluun19: Int, $fucktaluun20: Int, $fucktaluun21: Int, $fucktaluun22: Int) {
  fucktaluun0: Page(page: $fucktaluun0) {
    ...med
  }
  fucktaluun1: Page(page: $fucktaluun1) {
    ...med
  }
  fucktaluun2: Page(page: $fucktaluun2) {
    ...med
  }
  fucktaluun3: Page(page: $fucktaluun3) {
    ...med
  }
  fucktaluun4: Page(page: $fucktaluun4) {
    ...med
  }
  fucktaluun5: Page(page: $fucktaluun5) {
    ...med
  }
  fucktaluun6: Page(page: $fucktaluun6) {
    ...med
  }
  fucktaluun7: Page(page: $fucktaluun7) {
    ...med
  }
  fucktaluun8: Page(page: $fucktaluun8) {
    ...med
  }
  fucktaluun9: Page(page: $fucktaluun9) {
    ...med
  }
  fucktaluun10: Page(page: $fucktaluun10) {
    ...med
  }
  fucktaluun11: Page(page: $fucktaluun11) {
    ...med
  }
  fucktaluun12: Page(page: $fucktaluun12) {
    ...med
  }
  fucktaluun13: Page(page: $fucktaluun13) {
    ...med
  }
  fucktaluun14: Page(page: $fucktaluun14) {
    ...med
  }
  fucktaluun15: Page(page: $fucktaluun15) {
    ...med
  }
  fucktaluun16: Page(page: $fucktaluun16) {
    ...med
  }
  fucktaluun17: Page(page: $fucktaluun17) {
    ...med
  }
  fucktaluun18: Page(page: $fucktaluun18) {
    ...med
  }
  fucktaluun19: Page(page: $fucktaluun19) {
    ...med
  }
  fucktaluun20: Page(page: $fucktaluun20) {
    ...med
  }
  fucktaluun21: Page(page: $fucktaluun21) {
    ...med
  }
  fucktaluun22: Page(page: $fucktaluun22) {
    ...med
  }
}

fragment med on Page {
  studios {
    id,
    name,
    isAnimationStudio
  }
}`
