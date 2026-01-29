import { describe, it, expect } from 'vitest'
import { TIMELINE_DATA, ERA_INFO, getNodesByEra } from './timeline'

describe('TIMELINE_DATA', () => {
  it('contains timeline nodes', () => {
    expect(TIMELINE_DATA.length).toBeGreaterThan(0)
  })

  it('all nodes have required fields', () => {
    for (const node of TIMELINE_DATA) {
      expect(node.id).toBeTruthy()
      expect(node.type).toBeTruthy()
      expect(node.date).toBeTruthy()
      expect(node.title).toBeTruthy()
      expect(node.summary).toBeTruthy()
      expect(node.era).toBeTruthy()
      expect(node.importance).toBeTruthy()
    }
  })

  it('all nodes have valid era', () => {
    const validEras = Object.keys(ERA_INFO)
    for (const node of TIMELINE_DATA) {
      expect(validEras).toContain(node.era)
    }
  })

  it('all nodes have valid date format', () => {
    for (const node of TIMELINE_DATA) {
      const date = new Date(node.date)
      expect(date.toString()).not.toBe('Invalid Date')
    }
  })

  it('nodes are roughly chronological', () => {
    let lastDate = new Date('1900-01-01')
    for (const node of TIMELINE_DATA) {
      const nodeDate = new Date(node.date)
      // Allow some flexibility for nodes in the same era
      expect(nodeDate.getFullYear()).toBeGreaterThanOrEqual(lastDate.getFullYear() - 1)
      lastDate = nodeDate
    }
  })
})

describe('ERA_INFO', () => {
  it('all eras have required fields', () => {
    for (const [, info] of Object.entries(ERA_INFO)) {
      expect(info.name).toBeTruthy()
      expect(info.years).toBeTruthy()
      expect(info.color).toBeTruthy()
    }
  })

  it('colors are valid hex codes', () => {
    const hexColorRegex = /^#[0-9A-Fa-f]{6}$/
    for (const [, info] of Object.entries(ERA_INFO)) {
      expect(info.color).toMatch(hexColorRegex)
    }
  })
})

describe('getNodesByEra', () => {
  it('groups nodes by era', () => {
    const grouped = getNodesByEra(TIMELINE_DATA)
    
    expect(grouped.frontier).toBeDefined()
    expect(grouped.homestead).toBeDefined()
    expect(grouped.merge).toBeDefined()
  })

  it('preserves all nodes', () => {
    const grouped = getNodesByEra(TIMELINE_DATA)
    const totalGrouped = Object.values(grouped).flat().length
    
    expect(totalGrouped).toBe(TIMELINE_DATA.length)
  })

  it('groups nodes correctly', () => {
    const grouped = getNodesByEra(TIMELINE_DATA)
    
    for (const [era, nodes] of Object.entries(grouped)) {
      for (const node of nodes) {
        expect(node.era).toBe(era)
      }
    }
  })
})
