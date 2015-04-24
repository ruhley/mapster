<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\EventsPlacesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\EventsPlacesTable Test Case
 */
class EventsPlacesTableTest extends TestCase
{

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'EventsPlaces' => 'app.events_places',
        'Events' => 'app.events',
        'Chapters' => 'app.chapters',
        'Media' => 'app.media',
        'Universes' => 'app.universes',
        'CharacterChangeVersions' => 'app.character_change_versions',
        'Characters' => 'app.characters',
        'CharacterChanges' => 'app.character_changes',
        'CharacterVersions' => 'app.character_versions',
        'MapChangeVersions' => 'app.map_change_versions',
        'Maps' => 'app.maps',
        'MapChanges' => 'app.map_changes',
        'MapVersions' => 'app.map_versions',
        'PlaceChangeVersions' => 'app.place_change_versions',
        'PlaceTypes' => 'app.place_types',
        'PlaceChanges' => 'app.place_changes',
        'Places' => 'app.places',
        'PlaceVersions' => 'app.place_versions',
        'PlaceTypeVersions' => 'app.place_type_versions',
        'MediaVersions' => 'app.media_versions',
        'UniverseVersions' => 'app.universe_versions',
        'ChapterVersions' => 'app.chapter_versions',
        'EventVersions' => 'app.event_versions'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('EventsPlaces') ? [] : ['className' => 'App\Model\Table\EventsPlacesTable'];
        $this->EventsPlaces = TableRegistry::get('EventsPlaces', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->EventsPlaces);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
